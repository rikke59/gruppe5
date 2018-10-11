import EnturService from '@entur/sdk'

const service = new EnturService({ clientName: 'kristiania-tavle' })

// 3010420 -> Bjølsen


service.getStopPlaceDepartures("3010420").then(res => {
  console.log(res);
})catch(err => {
  console.log('error', err);
});

