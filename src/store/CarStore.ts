import { defineStore } from "pinia";
import axios from "axios";
export const useCarStore = defineStore("car", {
	state: () => ({
		newCar: {
			title: "",
			description: "",
			imageUrl: "",
			data: "",
			velocidademaxima: "",
			potencia: "",
			conforto: "",
		},
	}),
	actions: {
		async addCar() {
			// Validação adicional
			if (
				Number.parseInt(this.newCar.data) < 1900 ||
				Number.parseInt(this.newCar.data) > 2100
			) {
				alert("Ano deve estar entre 1900 e 2100.");
				return;
			}
			if (
				Number.parseFloat(this.newCar.potencia) < 0 ||
				Number.parseFloat(this.newCar.potencia) > 10
			) {
				alert("Potência deve estar entre 0 e 10.");
				return;
			}
			if (
				Number.parseFloat(this.newCar.conforto) < 0 ||
				Number.parseFloat(this.newCar.conforto) > 10
			) {
				alert("Conforto deve estar entre 0 e 10.");
				return;
			}

			try {
				const response = await axios.post(
					"http://localhost:3000/Tabela",
					this.newCar,
				);
				this.resetCar();
				console.log("Carro adicionado com sucesso:", response.data);
				return response.data;
			} catch (error) {
				console.error("Erro ao adicionar carro:", error.message);
				alert("Erro ao adicionar carro. Tente novamente.");
			}
		},
		resetCar() {
			this.newCar = {
				title: "",
				description: "",
				imageUrl: "",
				data: "",
				velocidademaxima: "",
				potencia: "",
				conforto: "",
			};
		},
	},
});
