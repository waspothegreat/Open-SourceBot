class Event {
  /**
   * @description Create a new event
   * @param {string} eventName The name of the event
   */
  constructor(eventName) {
    this.eventName = eventName;
  }

  /**
   * @description Method that runs when the event is fired
   */
  run() {
    throw new Error('Event is missing run method');
  }
}

module.exports = Event;
