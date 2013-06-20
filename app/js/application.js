guilded_rose = {};

function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

guilded_rose.initialize = function() {

  this.items = [];
  this.items.push(new Item('+5 Dexterity Vest', 10, 20));
  this.items.push(new Item('Aged Brie', 2, 0));
  this.items.push(new Item('Elixir of the Mongoose', 5, 7));
  this.items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
  this.items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
  this.items.push(new Item('Conjured Mana Cake', 3, 6));
};


guilded_rose.update_quality = function() {
  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (this.items[i].quality > 0) {
        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          this.items[i].quality = this.items[i].quality - 1
        }
      }
    } else {
      if (this.items[i].quality < 50) {
        this.items[i].quality = this.items[i].quality + 1
        if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.items[i].sell_in < 11) {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1
            }
          }
          if (this.items[i].sell_in < 6) {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1
            }
          }
        }
      }
    }
    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      this.items[i].sell_in = this.items[i].sell_in - 1;
    }
    if (this.items[i].sell_in < 0) {
      if (this.items[i].name != 'Aged Brie') {
        if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.items[i].quality > 0) {
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
              this.items[i].quality = this.items[i].quality - 1
            }
          }
        } else {
          this.items[i].quality = this.items[i].quality - this.items[i].quality
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1
        }
      }
    }
  }
}