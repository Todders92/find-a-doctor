export class Doctor {
  async getDoctor(issue) {
    try{
      let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=45.520736%2C-122.677672%2C100&user_location=45.520736%2C-122.677672&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200){
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}