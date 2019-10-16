function takeANumber(katzDeliLine, newPerson) {
katzDeliLine.push(newPerson);
return 'Welcome, ' + newPerson + '. You are number ' + katzDeliLine.length + ' in line.';
}

takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."
