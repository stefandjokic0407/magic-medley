export class Account {
  constructor(data) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.picture = data.picture;
    this.coverImg = data.coverImg;
    this.bio = data.bio;
    this.location = data.location
    // TODO add additional properties if needed
  }
}
