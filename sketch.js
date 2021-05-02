//consts
    const Engine = Matter.Engine;
    const World = Matter.World;
    const Bodies = Matter.Bodies

//variables
    var engine, world;
    var boyWithUmbrella;
    var maxDrops = 100
    var thunderCreatedFrame;
    var thunder
    var thunder1, thunder2, thunder3, thunder4;
    var rand;

//array for drops
    drops = [];    

function preload(){
    //loading images of thunder
        thunder1 = loadImage("thunderbolt/1.png");
        thunder2 = loadImage("thunderbolt/2.png");
        thunder3 = loadImage("thunderbolt/3.png");
        thunder4 = loadImage("thunderbolt/4.png");
}

function setup() {
    //creating a canvas
        createCanvas(500,1000);    
       
    //creating our engine and world
        engine = Engine.create();
        world = engine.world;   
        
    //creating bodies
        boyWithUmbrella = new Umbrella(200,500);

    //pushing drops into the array and displaying after 150 frames
        if (frameCount%150===0) {
            for (i=0; i<maxDrops; i++) {
                drops.push(new Drops(random(0,400), random(0,400)));
            }    
        }
}

function draw(){
    //updating Engine
        Engine.update(engine);
    //background color
        background(0);

    //switching cases for displaying thunder
        rand = Math.round(1,4)
        if (frameCount%80===0) {
            thunderCreatedFrame = frameCount;
            thunder = createSprite(random(10,370), random(10,30),10,10);
            switch (rand) {
                case 1: thunder.addImage("thunder_1",thunder1);
                break;
            
                case 2: thunder.addImage("thunder_2",thunder2);
                break;
        
                case 3: thunder.addImage("thunder_3",thunder3);
                break;
                
                case 4: thunder.addImage("thunder_4",thunder4);
                break;                
            }

            //scaling thunder
                thunder.scale = random(0.3,0.6);
        }  
        
    //destroying thunder
        if (thunderCreatedFrame + 10 === frameCount && thunder) {
            thunder.destroy();
        }    

    //displaying and updating rain drops
        for (i=0; i<maxDrops; i++) {
            drops[i].update();
            drops[i].display();
        }

    //displaying bodies
        boyWithUmbrella.display();        

    //drawing sprites
        drawSprites();    
}    

