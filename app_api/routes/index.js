var express = require('express');
var router  = express.Router();
var ctrlGoogleApi = require('../controllers/googleapi');
var ctrlLocationsData = require('../controllers/locations')
/*var ctrlAirplaneData = require('../controllers/airplane');
var ctrlAirportData = require('../controllers/airport');

// TAKEOFF DATA
router.get('/takeoffdata/:flaps/:weight', ctrlAirplaneData.takeoffDataReadOne);
router.get('/takeoffdata', ctrlAirplaneData.takeoffDataReadAll);

// CLIMB DATA
router.get('/climbdata/:weight', ctrlAirplaneData.climbDataReadOne);
router.get('/climbdata', ctrlAirplaneData.climbDataReadAll);

// LANDING DATA
router.get('/landingdata/:flaps/:weight', ctrlAirplaneData.landingDataReadOne);
router.get('/landingdata', ctrlAirplaneData.landingDataReadAll);*/

// LOCATION DATA
router.get('/locationsdata', ctrlLocationsData.airportDataReadAll);

// API KEYS
router.get('/googleurl/:placeId', ctrlGoogleApi.getLocationsData);

module.exports = router;