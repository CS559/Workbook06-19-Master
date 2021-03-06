// in case there was already an onload
// note: I cannot use the CS559 helper here since this file is not
// modern JavaScript and cannot import
var oldOnload_1 = window.onload;

//
// this is exactly the code from
// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
//
// with the following modifications:
//    - rather than making the render target fill the screen, it gets put in the
//      right location in the box at an appropriate size. this requires setting
//      the aspect ratio correctly
//    - i added a light source and used a material that responds to do
window.onload = function(ev) {
    if (oldOnload_1) oldOnload(ev);

    // Set up the renderer, which will create the Canvas for us
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( 200,200 ); // was (window.innerWidth, window.innerHeight );
    document.getElementById("three1").appendChild( renderer.domElement );

    // the aspect ratio is set to 1 - since we're making the window 200x200
    var camera = new THREE.PerspectiveCamera( 50, 1, 0.1, 1000 );

    //
    var scene = new THREE.Scene();

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // this was "MeshBasicMaterial"
    var material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    // we don't see anything if there is no light
    var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.5);
    scene.add( ambientLight );
    var pointLight = new THREE.PointLight( 0xffffff, 1 );
    pointLight.position.set( 25, 50, 25 );
    scene.add( pointLight );

    camera.position.z = 5;

    var animate = function () {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render( scene, camera );
    };

  animate();
};
