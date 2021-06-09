const SuperStorage = artifacts.require('./SuperStorage.sol');

module.exports = async function (callback) {
    let error;
    try {
        await deploy();
    }
    catch (e) {
        error = e;
    }
    callback(error);
};

deploy = async function () {

    console.log("SuperStorage.new()");
    const whatever = await SuperStorage.new({'from':'0x16e4242f36364dbf13a0c8deb0f8f5c3a2824601'});
    return;

    console.log(whatever.address);
    return;

    console.log("whatever.store(42)");
    await whatever.store(42);
    
    console.log("whatever.retrieve();");
    let num = await whatever.retrieve();

    console.log(num.toNumber());

    console.log("SuperStorage.at(whatever.address)");
    // 0x8796F75f309FF86E888d39Ba85988e8757B2d336
    const helloWorld = await SuperStorage.at(whatever.address);
    //const helloWorld = await SuperStorage.at('0x8796F75f309FF86E888d39Ba85988e8757B2d336');
    
    console.log("helloWorld.store(199)");
    await helloWorld.store(199);

    console.log(await helloWorld.retrieve());

    for(var i = 1; i < 5; i++) {
        console.log(`i=${i}`);

        console.log("helloWorld.store(i);");
        await helloWorld.store(i);

        console.log(await helloWorld.retrieve());
    }
}