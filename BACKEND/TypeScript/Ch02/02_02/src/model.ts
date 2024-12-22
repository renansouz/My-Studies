let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost = 425;

enum InventoryItemType {
    Computer = "computer", 
    Furniture = "furniture"
}

interface InventoryItem {
    displayName: string;
    inventoryType: InventoryItemType;
    trackingNumber: string;
    createDate: Date;
    originalCost: number;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
    return null;
}

function saveInventoryItem(item: InventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);

let updatedInventoryItem = inventoryItem;

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);