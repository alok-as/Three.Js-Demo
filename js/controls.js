const stage3 = document.querySelector(".stage3");

//3D GRAPHIC SETUP
let scene3, camera3, renderer3, cube, controls;
let ADD3 = 0.01;

//CREATING A SHAPE
const createOrbitalGeometry = () => {
	let material, texture, geometry;

	material = new THREE.MeshBasicMaterial({ color: 0x05386b });

	//Creating the cube
	geometry = new THREE.BoxGeometry(5, 5, 5);
	cube = new THREE.Mesh(geometry, material);
	scene3.add(cube);
};

// INITIALIZING THE SCENE

const init3 = () => {
	//CREATING A NEW SCENE
	scene3 = new THREE.Scene();
	scene3.background = new THREE.Color(0xebeb34);

	//SETTING UP THE CAMERA
	camera3 = new THREE.PerspectiveCamera(
		75,
		stage3.offsetWidth / stage3.offsetHeight,
		1,
		1000
	);
	camera3.position.z = 10;

	//CREATING A SHAPE
	createOrbitalGeometry();

	//RENDERING THE SCENE AND THE CAMERA
	renderer3 = new THREE.WebGLRenderer();
	renderer3.setSize(stage3.offsetWidth, stage3.offsetHeight);
	stage3.appendChild(renderer3.domElement);

	// SETTING UP ORBIT CONTROLS
	controls = new THREE.OrbitControls(camera3, renderer3.domElement);
	controls.rotateSpeed = 1;
	controls.update();
};

const animate3 = () => {
	cube.rotation.x += ADD3;
	cube.rotation.y += ADD3;
	renderer3.render(scene3, camera3);
	requestAnimationFrame(animate3);
};

//Initializing 3D Graphic
init3();

//Making the 3D Graphic Responsive
window.addEventListener("resize", () => {
	renderer3.setSize(stage3.offsetWidth, stage3.offsetHeight);
	camera3.aspect = stage3.offsetWidth / stage3.offsetHeight;
	camera3.updateProjectionMatrix();
});

animate3();
