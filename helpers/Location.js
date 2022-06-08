class Location {
  constructor(title, description, latitude, longitude, tags) {
    this.title = title;
    this.description = description;
    this.latitude = latitude;
    this.longitude = longitude;
    this.tags = tags;
    this.date = new Date();
    this.id =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    this.bookmarked = false;
  }

  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getLatitude() {
    return this.latitude;
  }
  getLongitude() {
    return this.longitude;
  }
  getTags() {
    return this.tags;
  }
  getDate() {
    return this.date;
  }
  getId() {
    return this.id;
  }
  save() {
    if (localStorage.getItem("locations") === null) {
      let locations = [];
      locations.push(this);
      localStorage.setItem("locations", JSON.stringify(locations));
    } else {
      let locations = JSON.parse(localStorage.getItem("locations"));
      locations.push(this);
      localStorage.setItem("locations", JSON.stringify(locations));
    }
  }
}

export { Location };
