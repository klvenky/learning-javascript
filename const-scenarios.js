const stringConstant = "Constant";
const arrayConstant = ["s1","s2","s3","S4"];
const objectConstant = {
    "key1":"val1",
    "key2":"val2",
    "key3":"val3",
    "key4":"val4"
};
const integerConstant = 2;
console.log("*********************Initial values**********************");
console.log("integerConstant : ",integerConstant);
console.log("stringConstant : ",stringConstant);
console.log("arrayConstant : ",arrayConstant);
console.log("objectConstant : ",objectConstant);
// stringConstant = "testChange"; // throws error as assignment is not permitted
// integerConstant = 3; // throws error as assignment is not permitted
// arrayConstant = [1,2,3,4]; // throws error as assignment is not permitted
// objectConstant = {"key1":"val2"}; // throws error as assignment is not permitted
// arrayConstant[0]="string1"; // Allowed since we are just changing a single value of arrayConstant
arrayConstant[0]=objectConstant; // Allowed since we are just changing a single value of arrayConstant
objectConstant["key1"] =stringConstant; // Allowed since we are just changing a single value of objectConstant

console.log("\n\n*********************After changes***********************");
console.log("integerConstant : ",integerConstant);
console.log("stringConstant : ",stringConstant);
console.log("arrayConstant : ",arrayConstant);
console.log("objectConstant : ",objectConstant);
