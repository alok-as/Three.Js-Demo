const stage4 = document.querySelector(".stage4");

let scene4, camera4, renderer4, cube1, cube2, cube3;
let ADD4 = 0.05;
let Theta = 0;

const createGeometry = () => {
	let material, geometry;

	//Creating the Cubes
	material = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		wireframe: true,
	});
	geometry = new THREE.BoxGeometry(5, 5, 5);
	cube1 = new THREE.Mesh(geometry, material);
	cube1.position.z = 3;
	cube1.position.x = -10;
	scene4.add(cube1);

	cube2 = new THREE.Mesh(geometry, material);
	cube2.position.z = 3;
	cube2.position.x = 0;
	scene4.add(cube2);

	cube3 = new THREE.Mesh(geometry, material);
	cube3.position.z = 3;
	cube3.position.x = 10;
	scene4.add(cube3);
};

const init4 = () => {
	//Creating a new scene4
	scene4 = new THREE.Scene();
	scene4.background = new THREE.Color(0xe834eb);

	//Setting up the camera4
	camera4 = new THREE.PerspectiveCamera(
		75,
		stage4.offsetWidth / stage4.offsetHeight,
		1,
		1000
	);
	camera4.position.z = 20;

	//Creating a Custom Shape
	createGeometry();

	// Rendering the scene4 and the camera4
	renderer4 = new THREE.WebGLRenderer();
	renderer4.setSize(stage4.offsetWidth, stage4.offsetHeight);
	stage4.appendChild(renderer4.domElement);
};

const animate4 = () => {
	camera4.lookAt(new THREE.Vector3(0, 0, 0));
	camera4.position.x = 40 * Math.sin(Theta);
	camera4.position.z = 40 * Math.cos(Theta);
	Theta += ADD4;
	cube1.rotation.x += ADD4;
	cube2.rotation.y += ADD4;
	cube3.rotation.z += ADD4;
	renderer4.render(scene4, camera4);
	requestAnimationFrame(animate4);
};

init4();
animate4();

//To make Scene and Camera adapt to window resize
window.addEventListener("resize", () => {
	renderer4.setSize(stage4.offsetWidth, stage4.offsetHeight);
	camera4.aspect = stage4.offsetWidth / stage4.offsetHeight;
});

window.addEventListener("resize", () => {
	renderer4.setSize(stage4.offsetWidth, stage4.offsetHeight);
	camera4.aspect = stage4.offsetWidth / stage4.offsetHeight;
	camera4.updateProjectionMatrix();
});
