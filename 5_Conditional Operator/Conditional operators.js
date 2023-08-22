// Save this code in a file named "conditional_operators.js"

// Conditional (Ternary) Operator
function ternaryOperatorExample(age) {
    return age >= 18 ? "You are an adult" : "You are not an adult";
}

// Logical AND (&&) Operator
function logicalAndOperatorExample(isLoggedIn, isAdmin) {
    return isLoggedIn && isAdmin ? "You have admin access" : "You do not have admin access";
}

// Logical OR (||) Operator
function logicalOrOperatorExample(isMember, hasCoupon) {
    return isMember || hasCoupon ? "You are eligible for a discount" : "You are not eligible for a discount";
}

// Logical NOT (!) Operator
function logicalNotOperatorExample(hasPermission) {
    return !hasPermission ? "You do not have permission" : "You have permission";
}

// Run the examples
const ageResult = ternaryOperatorExample(25);
console.log(ageResult);

const adminResult = logicalAndOperatorExample(true, true);
console.log(adminResult);

const discountResult = logicalOrOperatorExample(false, true);
console.log(discountResult);

const permissionResult = logicalNotOperatorExample(false);
console.log(permissionResult);
