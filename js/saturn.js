const stage1 = document.querySelector(".stage1");
let scene1, camera1, renderer1, planet, ring;
let rings = [];
let ADD1 = 0.1;

const createPlanet = () => {
	let geometry, material;

	//Creating the Sphere
	geometry = new THREE.SphereGeometry(4, 30, 30);
	material = new THREE.MeshBasicMaterial({
		color: 0xd55241,
	});
	planet = new THREE.Mesh(geometry, material);
	scene1.add(planet);

	//Creating the first Ring
	geometry = new THREE.TorusGeometry(5, 0.7, 2, 50);
	material = new THREE.MeshBasicMaterial({
		color: 0xffe39f,
	});
	ring = new THREE.Mesh(geometry, material);
	rings.push(ring);
	scene1.add(ring);

	//Creating the Second Ring
	geometry = new THREE.TorusGeometry(7, 0.7, 2, 50);
	material = new THREE.MeshBasicMaterial({
		color: 0xffe39f,
	});
	ring = new THREE.Mesh(geometry, material);
	rings.push(ring);
	scene1.add(ring);

	//Creating the Third Ring
	geometry = new THREE.TorusGeometry(9, 0.7, 2, 50);
	material = new THREE.MeshBasicMaterial({
		color: 0xffe39f,
	});
	ring = new THREE.Mesh(geometry, material);
	rings.push(ring);
	scene1.add(ring);

	rings.forEach((ring) => {
		ring.rotation.x = 1.7;
		ring.rotation.y = 0.2;
		scene1.add(ring);
	});
};

const init1 = () => {
	//Creating a scene
	scene1 = new THREE.Scene();
	scene1.background = new THREE.Color(0x05386b);

	//Setting up the Camera
	camera1 = new THREE.PerspectiveCamera(
		75,
		stage1.offsetWidth / stage1.offsetHeight,
		1,
		1000
	);

	camera1.position.z = 20;

	//Creating Planet
	createPlanet();

	//Creating the Renderer
	renderer1 = new THREE.WebGLRenderer();
	renderer1.setSize(stage1.offsetWidth, stage1.offsetHeight);
	stage1.appendChild(renderer1.domElement);
};

const animate1 = () => {
	camera1.position.y += ADD1;
	if (camera1.position.y >= 5 || camera1.position.y <= -5) ADD1 *= -1;
	renderer1.render(scene1, camera1);
	requestAnimationFrame(animate1);
};

//To make Scene and Camera adapt to window resize
window.addEventListener("resize", () => {
	renderer1.setSize(stage1.offsetWidth, stage1.offsetHeight);
	camera1.aspect = stage1.offsetWidth / stage1.offsetHeight;
});

init1();
animate1();
