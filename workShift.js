'use strict'

class WorkShift {
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
    // Case 2: START and END must be within 0-24
    if (!this.inRange(start, end, [0,24])) {
      console.log(`${start}-${end}: Time slot must be within 0-24`);
      return;
    }
    for (let i = 0; i < this.intervals.length; i++) {
      let timeSlot = this.intervals[i];
      let currStart = timeSlot[0];
      let currEnd = timeSlot[1];

      let nextSlot = this.intervals[i+1];
      // Case 3: timeSlot already within another timeSlot
      if (this.inRange(start, end, timeSlot)) {
        console.log(`${start}-${end}: already within`, timeSlot);
        return;
      }
      // Case 4: Combine two shifts
      if (nextSlot && this.inRange(currEnd, nextSlot[0], [start, end])) {
        console.log(`${currEnd} ${nextSlot[0]} are within ${start} ${end}`);
        this.intervals[i] = [currStart, nextSlot[1]];
        console.log(this.intervals);
        this.intervals.splice(i+1, 1);
        i--;
        continue;
      }
      // Case 5: timeSlot starts earlier and ends later than current timeSlot
      if (this.inRange(currStart, currEnd, [start, end])) {
        console.log(`${start}-${end}: overwrites`, timeSlot);
        this.intervals[i] = [start, end];
        return;
      }
      // Case 6: timeSlot starts earlier but ends within current timeSlot
      if (start < currStart && this.inRange(end, end, timeSlot)) {
        console.log(`${start}-${end}: starts earlier and ends during shift`);
        this.intervals[i] = [start, currEnd];
        return;
      }
      // Case 7: timeSlot starts during current timeSlot but ends later
      if (this.inRange(start, start, timeSlot) && end > currEnd) {
        console.log(`${start}-${end}: starts during shift and ends later`);
        this.intervals[i] = [currStart, end];
        return;
      }
      // Case 8: If timeSlots have no overlaps and comes before current timeSlot, insert // before
      if (end < currStart && !nextSlot && i !== this.intervals.length-1) {
        console.log(`${start}-${end}: inserting before`, timeSlot);
        this.intervals.splice(i, 0, [start, end]);
        return;
      }
      // Case 9: If timeSlot comes after current timeSlot, insert after
      if (start > currEnd && (!nextSlot || end < nextSlot[0])) {
        console.log(`${start}-${end}: inserting after`, timeSlot);
        this.intervals.splice(i+1, 0, [start, end]);
        return;
      }
    }
  }
  remove(start, end) {
    for (let i = 0; i < this.intervals.length; i++) {
      let timeSlot = this.intervals[i];
      let currStart = timeSlot[0];
      let currEnd = timeSlot[1];

      if (start === currStart && end === currEnd) {
        console.log(`removing`, timeSlot);
        this.intervals.splice(i, 1);
        return;
      }
      if (this.inRange(start, end, timeSlot)) {
        console.log('in range, will remove');
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

let newShift = new WorkShift();
newShift.add(1, 6);
newShift.display();

newShift.add(8, 9);
newShift.display();

newShift.add(12, 14);
newShift.display();

newShift.add(2, 9);
newShift.display();

newShift.add(1, 10);
newShift.display();

newShift.add(15, 16);
newShift.display();

newShift.remove(3, 5);
newShift.display();
