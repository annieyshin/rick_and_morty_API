export class RickAPI {

  getCharacters(attr) {
    let name = attr.name;
    let status = attr.status;
    let gender = attr.gender;

    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://rickandmortyapi.com/api/character/?gender=${gender}&name=${name}&status=${status}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("Get", url, true);
      request.send();
    });
  }


}
