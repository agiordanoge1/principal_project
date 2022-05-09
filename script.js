

var scene = new THREE.Scene();

var camera=new THREE.PerspectiveCamera(75, window.innerWidth /window.innerHeight ,0.1,1000);
camera.position.y=0;
camera.position.z=2;
camera.position.x=0;
var left= false;
var right=false;
const state=["left","center","right"];
var pos="center";
var move=0.1;

const loader = new FontLoader();

// loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

// 	const geometry = new TextGeometry( 'Hello three.js!', {
// 		font: font,
// 		size: 80,
// 		height: 5,
// 		curveSegments: 12,
// 		bevelEnabled: true,
// 		bevelThickness: 10,
// 		bevelSize: 8,
// 		bevelOffset: 0,
// 		bevelSegments: 5
// 	} );
// } );


var renderer= new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry( 10, 0.1, 10);
var material = new THREE.MeshPhongMaterial({color: "#bf9000"});
var cube = new THREE.Mesh(geometry, material);
cube.position.y=-2;

scene.add(cube);

const geometrytorus = new THREE.TorusGeometry( 1, 0.2, 16, 100 );
const materialtorus = new THREE.MeshPhongMaterial( { color: 0x049ef4 } );
const torus = new THREE.Mesh( geometrytorus, materialtorus );
console.log(torus.position.x);
scene.add( torus );


const cgeometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const cmaterial = new THREE.MeshPhongMaterial( {color: 0x990000 } );
const capsule = new THREE.Mesh( cgeometry, cmaterial );
scene.add( capsule );
capsule.position.x=-5;

const tgeometry = new THREE.TorusKnotGeometry( 1, 0.3, 100, 16 );
const tmaterial = new THREE.MeshPhongMaterial( { color: 0x274e13 } );
const torusKnot = new THREE.Mesh( tgeometry, tmaterial );
scene.add( torusKnot );
torusKnot.position.x=5;

var ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.5);
scene.add(ambientLight);

var directionalLight = new THREE.DirectionalLight(0xFFFFFF, 3);
directionalLight.position.set(0,10,0);
scene.add(directionalLight);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minAzimuthAngle=0;
controls.maxAzimuthAngle=0;
// this.autoRotate = true;
// this.autoRotateSpeed = 2.0;
//var controls2= new FirstPersonControls(camera, renderer.domElement);
controls.enableDamping=false;

window.addEventListener("keydown", function(event) {
    const p = document.createElement("p");
    p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
    //document.getElementById("output").appendChild(p);
    console.log(event.code);
    switch(event.code){
    case "ArrowRight":
        right=true;
        //camera.position.x+=move;
        // if(camera.position.x!=torusKnot.position.x)
        // {   
        //this.setInterval(mooveright,10);
        // console.log(camera.position.x);
        // }
        camera.position.x+=0.1;
        controls.target.x=camera.position.x;
        //camera.position.z+=0.1;


        break;
    case "ArrowLeft":
        left=true;
        //camera.position.x-=move;
        // if(camera.position.x!=capsule.position.x)
        // {   
        //this.setInterval(mooveleft,10);
        // console.log(camera.position.x);
        // }
        // for(var j=0;j<1;j++)
        // {
        // this.setInterval(mooveleft, 100);
        camera.position.x-=0.1;
        controls.target.x=camera.position.x;
        // //camera.position.z-=0.1;
        // }
        break;

    case "ArrowDown":
        camera.position.z+=0.1;
        break;

    case "ArrowUp":
        camera.position.z-=0.1;
        break;
            

    }

}, true);
function mooveleft()
{
    
    if(left)
    {
        if((camera.position.x!=-0.50))
        {   
            move=0.1;
            camera.position.x-=move;
            controls.target.x=camera.position.x;
            
        }  
    }
    else
    {
        move=0;
        clearInterval(10);
    }

    
}

function mooveright()
{
    if(right)
    {
        if(camera.position.x!=0.50)
        {   
            move=0.1;
            camera.position.x+=move;
            controls.target.x=camera.position.x; 
            
            
        }
    }

    else
    {
       move=0; 
       clearInterval(10);
    }

}
/*switch(pos)
{
    case "left":
        // camera.position.x-=1;
        // controls.target.x=camera.position.x;
        if(capsule.position.x-0.3<camera.position.x<capsule.position.x+0.3)
        {
        this.setInterval(mooveleft,100);
        }
        left=false;
        if(right)
        {
            pos="center";
        }
        break;

    case "center":
        if(left)
        {
            pos=left;
        }
        if(right)
        {
            pos="right";
        }
        break;

    case"right":
    camera.position.x-=1;
    controls.target.x=camera.position.x;
    right=false;
        if(left)
        {
            pos=center;
        }
        break;

}*/

// if(right)
// {
//     while(camera.position.x!=torusKnot.position.x)
//     {
//     camera.position.x+=0.1;
//     controls.position.x=camera.position.x;}
//     if(camera.position.x==torusKnot.position.x)
//     {
//         right=false;
//     }
// }
// else if(left)
// {
//     while(camera.position.x!=torusKnot.position.x)
//     {
//     camera.position.x-=0.1;
//     controls.position.x=camera.position.x;
//     }
//     if(camera.position.x==torusKnot.position.x)
//     {
//         left=false;
//     }
// }

// window.addEventListener("keydown", function(event) {
//   if (event.defaultPrevented) {
//     return; // Do nothing if event already handled
//   }

//   switch(event.code) {
//     case "KeyS":
//     case "ArrowDown":
//       // Handle "back"
//       //updatePosition(-moveRate);
//       break;
//     case "KeyW":
//     case "ArrowUp":
//       // Handle "forward"
//       //updatePosition(moveRate);
//       break;
//     case "KeyA":
//     case "ArrowLeft":
//       // Handle "turn left"
//       //angle -= turnRate;
//       break;
//     case "KeyD":
//     case "ArrowRight":
//       // Handle "turn right"
//       //angle += turnRate;
//       break;
//   }
// }


// const keysPressed={ }
// document.addEventListener('keydown',(event)=>
// {

// }, false);
// document.addEventListener('keydown',(event)=>
// {

// }, false);

var val1= 0x049ef4;
renderer.render( scene,camera);
var rota = 0.01;


function animate()
{
    requestAnimationFrame(animate);
    torus.rotation.x += rota;
    torus.rotation.y += rota;
    capsule.rotation.x += rota;
    capsule.rotation.y += rota;
    torusKnot.rotation.x += rota;
    torusKnot.rotation.y += rota;
    controls.update();
    renderer.render( scene, camera );
}

animate();