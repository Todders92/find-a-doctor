export class Doctor {
  async getDoctor(name) {
    try{
      let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.520736,-122.677672,100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
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
  async getSick(symptom){
    try{
        let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=45.520736,-122.677672,100&user_location=37.773%2C-122.413&skip=0&limit=100&user_key=${process.env.API_KEY}`);
        if (response.status != 200 && response.ok != 200){
            return false;
        } else {
            let jsonifiedResponse = await response.json();
            return jsonifiedResponse; 
        }
    } catch(error){
        return false;
    }
}
}