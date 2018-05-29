var PhoneNumber = require('./phone');

describe('PhoneNumber()', function () {
  it('cleans the number', function () {
    var phone = new PhoneNumber('(223) 456-7890');
    expect(phone.number()).toEqual('2234567890');
  });

<<<<<<< HEAD
  it('cleans numbers with dots', function () {
=======
  xit('cleans numbers with dots', function () {
>>>>>>> 3aac78e0f7cde15a5d355370ea91493a2c13212f
    var phone = new PhoneNumber('223.456.7890');
    expect(phone.number()).toEqual('2234567890');
  });

<<<<<<< HEAD
  it('cleans numbers with multiple spaces', function () {
=======
  xit('cleans numbers with multiple spaces', function () {
>>>>>>> 3aac78e0f7cde15a5d355370ea91493a2c13212f
    var phone = new PhoneNumber('223 456   7890   ');
    expect(phone.number()).toEqual('2234567890');
  });

<<<<<<< HEAD
  it('invalid when 9 digits', function () {
=======
  xit('invalid when 9 digits', function () {
>>>>>>> 3aac78e0f7cde15a5d355370ea91493a2c13212f
    var phone = new PhoneNumber('123456789');
    expect(phone.number()).toEqual(null);
  });

<<<<<<< HEAD
  it('invalid when 11 digits does not start with a 1', function () {
=======
  xit('invalid when 11 digits does not start with a 1', function () {
>>>>>>> 3aac78e0f7cde15a5d355370ea91493a2c13212f
    var phone = new PhoneNumber('22234567890');
    expect(phone.number()).toEqual(null);
  });

<<<<<<< HEAD
  it('valid when 11 digits and starting with 1', function () {
=======
  xit('valid when 11 digits and starting with 1', function () {
>>>>>>> 3aac78e0f7cde15a5d355370ea91493a2c13212f
    var phone = new PhoneNumber('12234567890');
    expect(phone.number()).toEqual('2234567890');
  });

<<<<<<< HEAD
  it('valid when 11 digits and starting with 1 even with punctuation', function () {
=======
  xit('valid when 11 digits and starting with 1 even with punctuation', function () {
>>>>>>> 3aac78e0f7cde15a5d355370ea91493a2c13212f
    var phone = new PhoneNumber('+1 (223) 456-7890');
    expect(phone.number()).toEqual('2234567890');
  });

<<<<<<< HEAD
  it('invalid when more than 11 digits', function () {
=======
  xit('invalid when more than 11 digits', function () {
>>>>>>> 3aac78e0f7cde15a5d355370ea91493a2c13212f
    var phone = new PhoneNumber('321234567890');
    expect(phone.number()).toEqual(null);
  });

<<<<<<< HEAD
  it('invalid with letters', function () {
=======

  xit('invalid with letters', function () {
>>>>>>> 3aac78e0f7cde15a5d355370ea91493a2c13212f
    var phone = new PhoneNumber('123-abc-7890');
    expect(phone.number()).toEqual(null);
  });

<<<<<<< HEAD
  it('invalid with punctuations', function () {
=======
  xit('invalid with punctuations', function () {
>>>>>>> 3aac78e0f7cde15a5d355370ea91493a2c13212f
    var phone = new PhoneNumber('123-@:!-7890');
    expect(phone.number()).toEqual(null);
  });

  xit('invalid if area code does not start with 2-9', function () {
    var phone = new PhoneNumber('(123) 456-7890');
    expect(phone.number()).toEqual(null);
  });

  xit('invalid if exchange code does not start with 2-9', function () {
    var phone = new PhoneNumber('(223) 056-7890');
    expect(phone.number()).toEqual(null);
  });
});
