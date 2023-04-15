"use strict";
const hdc = 100;
const input = document.querySelector(".input");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    const gramos = input.value;
    const HDC = gramos * hdc / 100;
    const HDC2 = HDC.toFixed(2);
    const HDC3 = HDC2 * 4;
    const CAL =  HDC3;
    const CAL2 = CAL.toFixed(2);
    let newhtml = `<div resultado>
                                <p class="text-result">Valores de la azucar en ${gramos} g</p>
                                <div class="inicial">
                                    <table class="table">
                                        <tr>
                                            <td>AZUCAR</td>
                                            <td>${gramos} g</td>
                                        </tr>
                                        <tr>
                                            <td>hidratos de carbono</td>
                                            <td>${HDC2} g</td>
                                        </tr>
                                        <tr>
                                            <td>proteina</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>grasas</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>Calorias</td>
                                            <td>${CAL2} cal</td>
                                        </tr>
                                        <tr>
                                            <td>calcio</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>fierro</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>vitamina A</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>vitamina C</td>
                                            <td>-</td>
                                        </tr>
                                    </table>
                                </div>
                            </div> `;
    document.querySelector(".resultado").innerHTML += newhtml;
});