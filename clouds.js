var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
directionalLight.position.set( 0, 1, 0 );
scene.add( directionalLight );
 
var geometry = new THREE.TorusGeometry( 10, 4, 16, 100 );
var material = new THREE.MeshPhongMaterial( 
    { 
        color: 0xccffee, 
        specular: 0x009900, 
        shininess: 30, 
        shading: THREE.SmoothShading 
    });

var cube = new THREE.Mesh( geometry, material ); 

scene.add( cube ); 
camera.position.z = 50;

function render() 
{ 
    requestAnimationFrame( render ); 

    cube.rotation.x += 0.02; 
    cube.rotation.y += 0.02;

    renderer.render( scene, camera ); 
} 

render();

