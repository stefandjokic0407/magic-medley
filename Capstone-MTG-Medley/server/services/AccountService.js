import { dbContext } from '../db/DbContext'

// Private Methods

/**
 * Creates account if one does not exist
 * @param {any} account
 * @param {any} user
 */
async function createAccountIfNeeded(account, user) {
  if (!account) {
    user._id = user.id
    account = await dbContext.Account.create({
      ...user,
      subs: [user.sub]
    })
  }
  return account
}

/**
 * Adds sub to account if not already on account
 * @param {any} account
 * @param {any} user
 */
async function mergeSubsIfNeeded(account, user) {
  if (!account.subs.includes(user.sub)) {
    // @ts-ignore
    account.subs.push(user.sub)
    await account.save()
  }
}
/**
 * Restricts changes to the body of the account object
 * @param {any} body
 */
function sanitizeBody(body) {
  const writable = {
    name: body.name,
    picture: body.picture,
    location: body.location
  }
  return writable
}

class AccountService {
  /**
   * Returns a user account from the Auth0 user object
   *
   * Creates user if none exists
   *
   * Adds sub of Auth0 account to account if not currently on account
   * @param {any} user
   */
  async getAccount(user) {
    let account = await dbContext.Account.findOne({
      _id: user.id
    })
    account = await createAccountIfNeeded(account, user)
    await mergeSubsIfNeeded(account, user)
    return account
  }

  /**
   * Updates account with the request body, will only allow changes to editable fields
   *  @param {any} user Auth0 user object
   *  @param {any} body Updates to apply to user object
   */
  async updateAccount(user, body) {
    const update = sanitizeBody(body)
    const account = await dbContext.Account.findOneAndUpdate(
      { _id: user.id },
      { $set: update },
      { runValidators: true, setDefaultsOnInsert: true, new: true }
    )
    return account
  }

  async edit(accountData) {
    const account = await dbContext.Account.findByIdAndUpdate(accountData.id)

    // @ts-ignore
    account.name = accountData.name || account.name
    // @ts-ignore
    account.picture = accountData.picture || account.picture
    // @ts-ignore
    account.email = accountData.email || account.email
    // @ts-ignore
    account.subs = accountData.subs || account.subs
    // @ts-ignore
    account.coverImg = accountData.coverImg || account.coverImg
    // @ts-ignore
    account.bio = accountData.bio || account.bio
    // @ts-ignore
    account.location = accountData.location || account.location

    // @ts-ignore
    await account.save()
    return account
  }
}
export const accountService = new AccountService()
