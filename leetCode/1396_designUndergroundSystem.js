class UndergroundSystem {
  constructor() {
    this.checkIns = {};
    this.times = {};
  }

  checkIn(id, stn, time) {
    this.checkIns[id] = [stn, time];

    return this.checkIns;
  }

  checkOut(id, stn, time) {
    if (this.checkIns[id] === undefined) {
      return;
    }

    let checkIn = this.checkIns[id];
    let key = `${checkIn[0]},${stn}`;
    let timeDif = time - checkIn[1];

    delete this.checkIns[id];

    if (this.times[key] !== undefined) {
      this.times[key][0] += timeDif;
      this.times[key][1]++;
    } else {
      this.times[key] = [timeDif, 1];
    }

    return this.checkIns;
  }

  getAverageTime(stnA, stnB) {
    let key = `${stnA},${stnB}`;
    let time = this.times[key][0];
    let count = this.times[key][1];

    return time / count;
  }
}

let undergroundSystem = new UndergroundSystem();

undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);

undergroundSystem.checkOut(45, "Waterloo", 15); // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
undergroundSystem.checkOut(27, "Waterloo", 20); // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
undergroundSystem.checkOut(32, "Cambridge", 22); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14

undergroundSystem.getAverageTime("Paradise", "Cambridge"); // return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
undergroundSystem.getAverageTime("Leyton", "Waterloo"); // return 11.00000. Two trips "Leyton" -> "Waterloo", (10 + 12) / 2 = 11

undergroundSystem.checkIn(10, "Leyton", 24);
undergroundSystem.getAverageTime("Leyton", "Waterloo"); // return 11.00000

undergroundSystem.checkOut(10, "Waterloo", 38); // Customer 10 "Leyton" -> "Waterloo" in 38-24 = 14
undergroundSystem.getAverageTime("Leyton", "Waterloo"); // return 12.00000. Three trips "Leyton" -> "Waterloo", (10 + 12 + 14) / 3 = 12
