//DOM SELECTIONS
const stage2 = document.querySelector(".stage2");

let scene2, camera2, renderer2;
let donuts = [];
let ADD2 = 0.1;

const createRandomPositionFromRange = (start, end) => {
	let position = Math.random() * (end - start);
	return position + start;
};

const createDonut = () => {
	let geometry = new THREE.TorusGeometry(1, 0.5, 5, 30);
	let material = new THREE.MeshBasicMaterial({
		color: Math.random() * 0xffffff,
	});
	donut = new THREE.Mesh(geometry, material);
	donut.position.x = createRandomPositionFromRange(-15, 15);
	donut.position.z = createRandomPositionFromRange(-15, 15);
	donut.position.y = 15;
	donuts.push(donut);
	scene2.add(donut);
};

const init2 = () => {
	//Creating a scene
	scene2 = new THREE.Scene();
	scene2.background = new THREE.Color(0xd55241);

	//Setting up the Camera
	camera2 = new THREE.PerspectiveCamera(
		75,
		stage2.offsetWidth / stage2.offsetHeight,
		1,
		1000
	);

	camera2.position.z = 20;
	camera2.position.y = -10;

	//Setting up the co-ordinate reference
	// let axes = new THREE.AxesHelper(50);
	// scene.add(axes);

	//Creating the Renderer
	renderer2 = new THREE.WebGLRenderer();
	renderer2.setSize(stage2.offsetWidth, stage2.offsetHeight);
	stage2.appendChild(renderer2.domElement);
};

//To make Scene and Camera adapt to window resize
window.addEventListener("resize", () => {
	renderer2.setSize(stage2.offsetWidth, stage2.offsetHeight);
	camera2.aspect = stage2.offsetWidth / stage2.offsetHeight;
});

const animate2 = () => {
	let x = Math.random();
	if (x < 0.1) createDonut();
	donuts.forEach((donut) => (donut.position.y -= ADD2));
	renderer2.render(scene2, camera2);
	requestAnimationFrame(animate2);
};

init2();
animate2();
