import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("./views/Home.vue"),
	},
	{
		path: "/tabela",
		name: "tabela",
		component: () => import("./views/Tabela.vue"),
	},
	{
		path: "/sobre",
		name: "sobre",
		component: () => import("./views/Sobre.vue"),
	},
	{
		path: "/faleconosco",
		name: "faleconosco",
		component: () => import("./views/Faleconosco.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
