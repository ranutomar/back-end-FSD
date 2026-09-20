//event
//eventemitter- on(emit (event param ),callabck) register event or event listner ,on (),emit()-trigger event /crete event/fire event
 const EventEmitter=required('event');
 class MyEvent extends EvenEmitter{};
 const events=new EventEmitter();
 event.emit("greet"),(name)=>{
    console.log(`hello,${name}! this is event emitter`);

 }
 events.on("exit",()=>{});
 events.emit("greet","ranu");
 events.emit("exit");


