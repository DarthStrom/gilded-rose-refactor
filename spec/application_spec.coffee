describe "update quality", ->

  Given -> guilded_rose.initialize()

  describe "Once the sell_in days is less then zero, quality degrades twice as fast", ->
    Given -> 
      for x in [1..11] by 1
        guilded_rose.update_quality()
    Then -> expect(guilded_rose.items[0].quality).toBe 8

  describe "quality can't go below zero", ->
    Given ->
      for x in [1..7] by 1
        guilded_rose.update_quality()

    When -> @elixerQuality = guilded_rose.items[2].quality
    Then -> expect(@elixerQuality).toBe 0

  describe "'Aged Brie' actually increases in quality the older it gets", ->
    Given ->
      guilded_rose.update_quality()
    Then -> expect(guilded_rose.items[1].quality == 2)