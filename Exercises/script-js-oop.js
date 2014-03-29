function test1() {
	
	var car = new Vehicle();
	document.getElementById("wrapper").innerHTML = "The speed of the car is: " + car.calcSpeed() + "km/h";
}

function test2() {
	
	var car = new Vehicle("wheels");
	document.getElementById("wrapper").innerHTML = "The speed of the car is: " + car.calcSpeed() + "km/h";
}

function test3() {
	
	var car = new Vehicle("propNozzles");
	document.getElementById("wrapper").innerHTML = "The speed of the car is: " + car.calcSpeed() + "km/h";
}

function test4() {
	
	var car = new Vehicle("propellers");
	document.getElementById("wrapper").innerHTML = "The speed of the car is: " + car.calcSpeed() + "km/h";
}

function test5() {
	
	var car = new Vehicle();
	car.setWheels(3, 10);
	document.getElementById("wrapper").innerHTML = "The speed of the car is: " + car.calcSpeed() + "km/h";
}

function test6() {
	
	var car = new Vehicle("propNozzles");
	car.setPropNozzles(10, "on");
	document.getElementById("wrapper").innerHTML = "The speed of the car is: " + car.calcSpeed() + "km/h";
}

function test7() {
	
	var car = new LandVehicle();
	
	document.getElementById("wrapper").innerHTML = "The speed of the car is: " + car.calcSpeed() + "km/h";
}

function test8() {
	
	var car = new AirVehicle();
	car.swAfer("on");
	document.getElementById("wrapper").innerHTML = "The speed of the car is: " + car.calcSpeed() + "km/h";
}






// var vehicleFactory = (function () { --The module beginning is here--
	
	function Vehicle(propulsionUnit) {
		
		var self = this;
		self.propUnit = propulsionUnit;
		
		var propUnitAccel = {
			wheels: 100,
			propNozzles: 70,
			propellers: 40
		}
		
		self.propUnit = self.propUnit || "wheels";
		
		if (!(propUnitAccel.hasOwnProperty(self.propUnit))) {
			alert("Invalid propulsion unit");
			return;
		}
		
		self.acceleration = 0;
		self.speed = 0;
		
		switch (self.propUnit) {
			case "wheels": self.acceleration = 100; break;
			case "propNozzles": self.acceleration = 70 ; break;
			case "propellers": self.acceleration = 40; break;
		}
		
		//setting number of wheels and radius
		
		self.setWheels = function setNumberOfWheels(wheelsNum, radius) {
			
			self.wheelsNum = wheelsNum;
			self.radius = radius;
			
			if (self.propUnit != "wheels") {
				return;
			}
			
			
			if ((self.wheelsNum <= 1) || !(parseInt(self.wheelsNum))) {
				alert("Invalid number of wheels");
				return;
			}
			
			switch (self.wheelsNum) {
				case 2: self.acceleration += self.radius*4; break;
				case 3: self.acceleration += self.radius*6; break;
				case 4: self.acceleration += self.radius*8; break;
				case 5: self.acceleration -= 30; break;
				case 6: self.acceleration -= 30; break;
			}
			
			if (self.wheelsNum >= 7) {
				self.acceleration -= 70;
			}
		}
		
		//setting prop nozzles' power and afterburner state(on/off)
		
		self.setPropNozzles = function setPropulsionNozzles(power, afterburner) {
			
			self.afterburner = afterburner;
			self.power = power;
			
			if (self.propUnit != "propNozzles") {
				return;
			}
			
			if (self.power<1 || self.power > 100) {
				alert("Invalid power(enter between 1 and 100)");
				return;
			}
			
			if (self.power < 10) {
				self.acceleration -= 60;
			}
						
			var powerUnit = parseInt(self.power/2);
			
			self.afterburner = self.afterburner || "off";
			
			if (self.afterburner != "on" && self.afterburner != "off") {
				alert("Invalid afterburner state(on/off)");
				return;
			}
			
			if (self.afterburner== "off") {
				self.acceleration += powerUnit;
			} else {
				self.acceleration += (powerUnit * 2);
			}
		}
		
		//setting propellers number of fins and spin direction(clockwise, counterclockwise)
		
		self.setProp = function setPropellers(fins, spinDirection) {
			
			self.fins = fins;
			self.spinDirection = spinDirection;
			
			if (self.propUnit != "propellers") {
				return;
			}
			
			if (self.fins <= 1 || !(parseInt(self.fins)) || self.fins > 10) {
				alert("Invalid fin number(fins: 1....10)")
			}
			
			if (self.spinDirection == "clockwise") {
				self.acceleration += self.fins;
			}else if (self.spinDirection == "couterclockwise") {
				self.acceleration -= self.fins;
			} else {
				alert("Invalid spin direction");
				return;
			}
		}
		
		self.calcSpeed = function calculateSpeed() {
			self.speed += self.acceleration;
			return self.speed
		}
		
		
		
	}
	
	function LandVehicle() {
	
		this.setWheels(4, 8);
	
	}
	
	function AirVehicle() {
		
		var self = this;
		
		
		self.swAfer = function switchAfterBurner (state) {
			
			self.state = state;
			
			if (self.state == "on") {
				self.setPropNozzles(50, "on")
			} else if(self.state == "off") {
				self.setPropNozzles(50, "off")
			} else {
				alert("Invalid state");
			}
			
		}
		
	}
	
	AirVehicle.prototype = new Vehicle();
	AirVehicle.prototype.constructor = AirVehicle;
	
	
	LandVehicle.prototype = new Vehicle();
	LandVehicle.prototype.constructor = LandVehicle;
	
	
// -- return object with the functions here --
// }()) -- The module ending is here -- 
