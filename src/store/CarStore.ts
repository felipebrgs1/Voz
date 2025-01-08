import { defineStore } from "pinia";
import sql from "../../neodrive";

export const useCarStore = defineStore("car", {
  state: () => ({
    newCar: {
      title: "",
      imageurl: "",
      data: "",
      velocidademaxima: "",
      potencia: "",
      conforto: "",
    },
    cars: [],
  }),
  actions: {
    async addCar() {
			try {
				const { title, imageurl, data, velocidademaxima, potencia, conforto } = this.newCar;
		
				await sql(`
					INSERT INTO projects (title, imageurl, "data", velocidademaxima, potencia, conforto)
					VALUES ($1, $2, $3, $4, $5, $6);
				`, [title, imageurl, data, velocidademaxima, potencia, conforto]);
		
				console.log("Carro adicionado com sucesso!");
				this.resetCar();
				await this.getCars(); // Atualiza a lista de carros após adicionar um novo
			} catch (error) {
				console.error("Erro ao adicionar carro:", error.message);
				alert("Erro ao adicionar carro. Tente novamente.");
			}
		}
		,
    resetCar() {
      this.newCar = {
        title: "",
        imageurl: "",
        data: "",
        velocidademaxima: "",
        potencia: "",
        conforto: "",
      };
    },
    async getCars() {
      try {
        const response = await sql`SELECT * FROM projects`;
        this.cars = response // Certifique-se de que a resposta tenha a propriedade 'rows'
      } catch (error) {
        console.error('Erro ao carregar os carros:', error.message);
        alert('Erro ao carregar os carros. Tente novamente.');
      }
    },
		async deleteCar(id: number) {
			try {
				await sql`DELETE FROM projects WHERE id = ${id}`;
				console.log('Carro excluído com sucesso:', id);
				await this.getCars(); 
			} catch (error) {
				console.error('Erro ao excluir o carro:', error.message);
				alert('Erro ao excluir o carro. Tente novamente.');
			}
		},
  },
});
