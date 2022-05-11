

var scene = new THREE.Scene();

var camera=new THREE.PerspectiveCamera(75, window.innerWidth /window.innerHeight ,0.1,1000);
camera.position.y=0;
camera.position.z=4;
camera.position.x=0;
var left= false;
var right=false;

let texture_ft = new THREE.TextureLoader().load( 'dinosaure.png');



var renderer= new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry( 100, 0.1, 100);
var material = new THREE.MeshPhongMaterial({color: 0x274e13});
var cube = new THREE.Mesh(geometry, material);
cube.position.y=-2;

scene.add(cube);

var cubgeometry = new THREE.BoxGeometry( 1, 1, 1);
var cubmaterial = new THREE.MeshPhongMaterial({color: 0x674ea7});
var cube2 = new THREE.Mesh(cubgeometry, cubmaterial);
cube2.position.y=0;

scene.add(cube2);

const pgeometry = new THREE.PlaneGeometry( 100, 100 );
const pmaterial = new THREE.MeshPhongMaterial( {color: 0x2986cc , side: THREE.DoubleSide} );
const plane = new THREE.Mesh( pgeometry, pmaterial );
plane.position.z=-7
scene.add( plane );

const geometrytorus = new THREE.TorusGeometry( 1, 0.2, 16, 100 );
const materialtorus = new THREE.MeshPhongMaterial( { color: 0xe69138 } );
const torus = new THREE.Mesh( geometrytorus, materialtorus );
console.log(torus.position.x);
scene.add( torus );


const cgeometry = new THREE.CapsuleGeometry( 1, 1, 4, 21 );
const cmaterial = new THREE.MeshPhongMaterial( {color: 0x990000 } );
const capsule = new THREE.Mesh( cgeometry, cmaterial );
scene.add( capsule );
capsule.position.x=-5;
capsule.rotation.z=80;
capsule.rotation.x=45;

const c2geometry = new THREE.CapsuleGeometry( 1, 1, 4, 21 );
const c2material = new THREE.MeshPhongMaterial( {color: 0xd5caa7 } );
const capsule2 = [];

for(var j=0;j<3;j++)
{
capsule2[j]=new THREE.Mesh( c2geometry, c2material );
scene.add( capsule2[j] );
}


capsule2[0].position.y=5;
capsule2[0].position.x=-5;
capsule2[0].position.z=-5;
capsule2[0].rotation.z=80;



capsule2[1].position.y=5;
capsule2[1].position.x=-3;
capsule2[1].position.z=-5;
capsule2[1].rotation.z=80;

capsule2[2].position.y=5;
capsule2[2].position.x=-1;
capsule2[2].position.z=-5;
capsule2[2].rotation.z=80;

const tgeometry = new THREE.TorusKnotGeometry( 1, 0.3, 100, 16 );
const tmaterial = new THREE.MeshPhongMaterial( { color: 0x6c3a05 } );
const torusKnot = new THREE.Mesh( tgeometry, tmaterial );
scene.add( torusKnot );
torusKnot.position.x=5;
capsule.rotation.x=-45;

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
        cube2.rotation.y+=0.02;
        torus.rotation.y+=0.02;
        torusKnot.rotation.y+=0.02;
        capsule.rotation.y+=0.02;
        
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
        cube2.rotation.y-=0.02;
        torus.rotation.y-=0.02;
        torusKnot.rotation.y-=0.02;
        capsule.rotation.y-=0.02;
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
    // torus.rotation.x += rota;
    // torus.rotation.y += rota;
    // capsule.rotation.x += rota;
    // capsule.rotation.y += rota;
    // torusKnot.rotation.x += rota;
    // torusKnot.rotation.y += rota;
    controls.update();
    renderer.render( scene, camera );
}

animate();