'use strict'

class workShift {
  constructor() {
    this.intervals = [];
  }
  add(start, end) {
    // Case 0: Empty interval
    if (!this.intervals.length) {
      this.intervals.push([start, end]);
      console.log(`${start}-${end}: Empty workshift, pushing new timeSlot`);
      return;
    }
    // Case 1: Start time later than end time
    if (start >= end) {
      console.log(`${start}-${end}: Start time must be earlier than end time`);
      return;
    }
    // Case 2: FROM and TO must be within 0-24
    if (!this.inRange(start, end, [0,24])) {
      console.log(`${start}-${end}: Time slot must be within 0-24`);
      return;
    }
    for (let i = 0; i < this.intervals.length; i++) {
      let timeSlot = this.intervals[i];
      let currStart = timeSlot[0];
      let currEnd = timeSlot[1];
      // Case 3: timeSlot already within another timeSlot
      if (this.inRange(start, end, timeSlot)) {
        console.log(`${start}-${end}: already within`, timeSlot);
        return;
      }
      // Case 4: timeSlot starts earlier and ends later than current timeSlot
      if (this.inRange(currStart, currEnd, [start, end])) {
        console.log(`${start}-${end}: overwrites`, timeSlot);
        this.intervals[i] = [start, end];
        return;
      }
      // Case 5: timeSlot starts earlier but ends within current timeSlot
      if (start < currStart && this.inRange(end, end, timeSlot)) {
        console.log(`${start}-${end}: starts earlier and ends during shift`);
        this.intervals[i] = [start, currEnd];
        return;
      }
      // Case 6: timeSlot starts during current timeSlot but ends later
      if (this.inRange(start, start, timeSlot) && end > currEnd) {
        console.log(`${start}-${end}: starts during shift and ends later`);
        this.intervals[i] = [currStart, end];
        return;
      }
    }
  }
  display() {
    console.log(this.intervals);
  }
  inRange(start, end, timeSlot) {
    return (start >= timeSlot[0] && end <= timeSlot[1]);
  }
}

let newShift = new workShift();
newShift.add(3, 6); // Case 0
newShift.display();

newShift.add(5, 2); // Case 1
newShift.display();

newShift.add(-1, 3) // Case 2
newShift.display();

newShift.add(4, 5) // Case 3
newShift.display();

newShift.add(2, 7) // Case 4
newShift.display();

newShift.add(1, 6) // Case 5
newShift.display();

newShift.add(2, 6) // Case 6
newShift.display();
