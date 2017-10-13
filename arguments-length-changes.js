function argumentTest(a, b, c) {
    console.log(arguments.length, ' :: ', arguments);
}
argumentTest();
argumentTest('a');
argumentTest('a', 'b');
argumentTest('a', 'b', 'c');
argumentTest('a', 'b', 'c', 'd');