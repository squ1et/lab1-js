class Notebook {
    constructor(name, num_of_papers) {
        if (name && num_of_papers > 0) {
            this.name = name;
            this.num_of_papers = num_of_papers;
        }
        else {
            this.name = 'Test';
            this.num_of_papers = 12;
        }
    }

    Cost () {
        return 15 * this.num_of_papers;
    }
}

class General extends Notebook {
    constructor(name, num_of_papers, material) {
        super(name, num_of_papers);
        this.material = material;
    }

    Cost() {
        let baseCost = super.Cost();

        if (this.material) {
            return baseCost + 50;
        } else {
            return baseCost;
        }
    }
}

function show(message, id, res) {
    document.getElementById(id).innerHTML = message + " " + res;
}

function notebook_ras() {
    let name1 = document.getElementById("name1").value;
    let num_of_papers1 = parseFloat(document.getElementById("num_of_papers1").value);

    let name2 = document.getElementById("name2").value;
    let num_of_papers2 = parseFloat(document.getElementById("num_of_papers2").value);
    let material = document.getElementById("material").value;


    let notebook = new Notebook(name1, num_of_papers1);
    let general = new General(name2, num_of_papers2, material);

    show("Вартість", "Cost1", notebook.Cost());
    show("Назва", "Name1", notebook.name);

    show("Вартість", "Cost2", general.Cost());
    show("Матеріал", "Material2", general.material);
}
