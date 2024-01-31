// Immediately Invoked Function expression(IIFE)
// syntax - ()()

(function chai()
{
    // named IIFE
console.log(`Db connected`);
})();

// without name IIFE
((name)=>
{
    console.log(`db connected to ${name}`);
})('taniya')

