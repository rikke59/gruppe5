import EnturService from '@entur/sdk'

const service = new EnturService({ clientName: 'kristiania-tavle' })
const now = new Date()

// 3010420 -> Bjølsen

const EnturAPI =  {

  toTimeString(date) {
      const hour = String(date.getHours()).padStart(2, '0')
      const minute = String(date.getMinutes()).padStart(2, '0')
      return `${hour}:${minute}`
  },

  minutesDifference(date1, date2) {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime())
      return Math.floor(timeDiff / (1000 * 60))
  },

  async example() {
      const departures = await service.getStopPlaceDepartures('NSR:StopPlace:337')

      let prettyDepartures = []

      departures.forEach((departure) => {
          const { expectedDepartureTime, destinationDisplay, serviceJourney } = departure
          const { line } = serviceJourney.journeyPattern

          const departureTime = new Date(expectedDepartureTime)
          const minDiff = this.minutesDifference(now, departureTime)
          const departureLabel = minDiff < 15 ? `${minDiff} min` : this.toTimeString(departureTime)

          let departureItem = {
            "departureLabel": departureLabel,
            "transportMode": line.transportMode,
            "publicCode": line.publicCode,
            "destinationDisplay": destinationDisplay.frontText
          }

          prettyDepartures.push(departureItem)


          //washedDepartures.push(`${departureLabel} ${line.transportMode} ${line.publicCode} ${destinationDisplay.frontText}`)
      })
      return prettyDepartures
  }

}


export default EnturAPI




