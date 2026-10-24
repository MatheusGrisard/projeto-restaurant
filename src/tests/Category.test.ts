import {describe, it, expect} from "vitest";
import { Category } from "../models/Category.js";

describe("Category - Testes Unitários", () => {

    it("Deve criar uma categoria valida", () => {

        const name = "Pizzas";
        const display_order = 1;
        const description = "Categoria de Pizzas";
        const icon = "";

        const category = new Category
        (name, 
        display_order, 
        description, 
        icon
    );

    expect(category.getName()).toBe("Pizzas");
    expect(category.getDisplayOrder()).toBe(1);
    expect(category.getDescription()).toBe("Categoria de Pizzas");
    expect(category.getIcon()).toBe("");
    expect(category.isActive()).toBe(true);
    expect(category.getId()).toBeUndefined();
    })
});      

it("Não deve permitir criar uma categoria com nome vazio", () => {
        
        const name = "";
        const display_order = 1;

        expect(() => {
            new Category(name, display_order);
        }).toThrow("Nome da categoria é obrigatório");
    });

it("Não deve permitir ordem de exibição negativa", () => {

    const name = "Pizzas";
    const display_order = -1;

    expect(() => {
        new Category(name, display_order);
    }).toThrow("A ordem de exibição deve ser um número inteiro maior ou igual a zero.");
});

    it("Deve remover espaços antes e depois do nome da categoria", () => {

        const name = "      Pizzas       ";//TRIM()
        const display_order = 1;

        const category = new Category(name, display_order);
       
    expect(category.getName()).toBe("Pizzas");
    }); 
    
    it("Não deve permitir criar uma categoria contendo apenas espaços", () => {

        const name = "      ";//TRIM()
        const display_order = 1;

 expect(() => {
        new Category(name, display_order);
    }).toThrow("O nome da categoria é obrigatório.");        
});

it("Não deve permitir ordem de exibição decimal", () => {

        const name = "Pizzas";
        const display_order = 1.5;

 expect(() => {
        new Category(name, display_order);
    }).toThrow("A ordem de exibição deve ser um número inteiro maior ou igual a zero.");        
});

it("Não deve permitir ordem de exibição igual a zero", () => {

        const name = "Pizzas";
        const display_order = 0;

    const category = new Category(name, display_order);

    expect(category.getDisplayOrder()).toBe(0);
  });

it("Deve permitir renomear uma categoria existente", () => {

    const category = new Category("Pizzas", 1);

    category.rename("Bebidas");

    expect(category.getName()).toBe("Bebidas");
  });

it("Deve preservar o nome original após uma tentativa invalida de renomeação", () => {

    const category = new Category("Pizzas", 1);

    expect(() => {
    category.rename("");
    }).toThrow("O nome da categoria é obrigatório.");

    expect(category.getName()).toBe("Pizzas");
  });

it("Deve permitir desativar e reativar uma categoria", () => {

    const category = new Category("Pizzas", 1);

    category.deactivate();

    expect(category.isActive()).toBe(false);

    category.activate();

    expect(category.isActive()).toBe(true);
  });

  it("Deve restaurar uma categoria existente", () => {

        const id = "";
        const name = "Pizzas";
        const display_order = 1;
        const active = false;
        const description = "Categoria de Pizzas";
        const icon = "";

        const category = Category.restore
        (id,
        name, 
        display_order, 
        active,
        description, 
        icon
    );

    expect(category.getId()).toBe(id);
    expect(category.getName()).toBe("Pizzas");
    expect(category.getDisplayOrder()).toBe(1);
    expect(category.getDescription()).toBe("Categoria de Pizzas");
    expect(category.getIcon()).toBe("");
    expect(category.isActive()).toBe(false);
    });

 it("Deve permitir alterar a descrição de uma categoria", () => {

        const name = "Pizzas";
        const display_order = 1;
        const description = "Categoria de Pizzas";

        const category = new Category(name, display_order, description);
    
        category.changeDescription("Categoria de pizzas tradicionais e especiais");

        expect(category.getDescription()).toBe("Categoria de pizzas tradicionais e especiais");
    });

    it("Deve permitir alterar a icone de uma categoria", () => {

        const name = "Pizzas";
        const display_order = 1;
        const description = "Categoria de pizzas tradicionais";
        const icon = "";

        const category = new Category(name, display_order, description, icon);

        category.changeIcon("icone.png");

        expect(category.getIcon()).toBe("icone.png");
    });

    it("Deve permitir alterar a ordem de exibição de uma categoria", () => {

        const category = new Category("Pizzas", 1);

        category.changeDisplayOrder(22);

        expect(category.getDisplayOrder()).toBe(22);
    });
    
