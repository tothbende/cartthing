import { calculate_price } from "./script.js";
import { test, expect } from "vitest";


test("10% kedvezmény a legdrágább termékre - alma, tv", () => {
    const cart1 = [
        { termek: "alma", egysegar: 100, mennyiseg: 1 },
        { termek: "tv", egysegar: 1000, mennyiseg: 1 }
    ];//1000
    expect(calculate_price(cart1)).toBe(1000);
});

test("10% kedvezmény a legdrágább termékre - evőeszköz, tányér", () => {
    const cart2 = [
        { termek: "evőeszköz", egysegar: 15000, mennyiseg: 1 },
        { termek: "tányér", egysegar: 15000, mennyiseg: 2 }
    ];//42000
    expect(calculate_price(cart2)).toBe(42000);
});

test("10% kedvezmény a legdrágább termékre - alma, tej, evőeszköz készlet (1), tányér készlet (2)", () => {
    const cart3 = [
        { termek: "alma", egysegar: 35, mennyiseg: 8 },
        { termek: "tej", egysegar: 715, mennyiseg: 2 },
        { termek: "evőeszköz készlet", egysegar: 15000, mennyiseg: 1 },
        { termek: "tányér készlet", egysegar: 15000, mennyiseg: 2 }
    ];//43710
    expect(calculate_price(cart3)).toBe(43710);
});

test("10% kedvezmény a legdrágább termékre - alma, tej, evőeszköz készlet (2), tányér készlet (2)", () => {
    const cart = [
        { termek: "alma", egysegar: 35, mennyiseg: 8 },
        { termek: "tej", egysegar: 715, mennyiseg: 2 },
        { termek: "evőeszköz készlet", egysegar: 15000, mennyiseg: 2 },
        { termek: "tányér készlet", egysegar: 15000, mennyiseg: 2 }
    ];//58680
    expect(calculate_price(cart)).toBe(58710);
});