"use strict";
const hdc = 5;
const prot = 3;
const gras = 3;
const input = document.querySelector(".input");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    const gramos = input.value;
    const HDC = gramos * hdc / 100;
    const PROT = gramos * prot / 100;
    const GRAS = gramos * gras / 100;
    const GRAS2 = GRAS.toFixed(2);
    const HDC2 = HDC.toFixed(2);
    const PROT2 = PROT.toFixed(2);
    let newhtml = `<div resultado>
                                <p class="text-result">Valores de la Leche en ${gramos} g</p>
                                <div class="inicial">
                                    <table class="table">
                                        <tr>
                                            <td>LECHE</td>
                                            <td>${gramos} g</td>
                                        </tr>
                                        <tr>
                                            <td>hidratos de carbono</td>
                                            <td>${HDC2} g</td>
                                        </tr>
                                        <tr>
                                            <td>proteina</td>
                                            <td>${PROT2} g</td>
                                        </tr>
                                        <tr>
                                            <td>grasas</td>
                                            <td>${GRAS2} g</td>
                                        </tr>
                                    </table>
                                </div>
                            </div> `;
    document.querySelector(".resultado").innerHTML += newhtml;
});