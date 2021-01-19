<template>
  <ul class="c-list">
    <li
      class="c-list__list-item"
      v-for="item in list"
      :key="`${item.index}-${item.value}`"
      :class="[item.isClickable ? 'c-list__list-item--clickable' : '', `c-list__list-item--${item.index}`]"
      @click="item.isClickable ? onListItemClick($event, item.index) : ''"
    >
      <p class="c-list__value">
        {{ item.value }}
      </p>
      <button class="c-list__button" @click="deleteListItem($event)">
        Delete
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",

  data() {
    return {
      list: [],
    };
  },

  mounted() {
    this.prepareList();
  },

  methods: {
    prepareList() {
      for (let i = 0; i < 100; i++) {
        let isClickable;

        isClickable = (i + 1) % 3 === 0 ? true : false;

        this.list.push({
          index: i,
          value: `List item ${i + 1}`,
          isClickable: isClickable,
          ...(isClickable && { clicked: false }),
        });
      }
    },

    onListItemClick(event, index) {
      let clicked = this.list[index].clicked;

      event.currentTarget.style.color = clicked ? "" : "#ff0084";
      this.list[index].clicked = !clicked;
    },

    deleteListItem(event) {
      let element = event.currentTarget.parentElement;

      element.parentElement.removeChild(element);
    },
  },
};
</script>

<style lang="scss" scoped>
.c-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

.c-list__list-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;

  &:last-child {
    border-bottom: 0;
  }
}

.c-list__list-item--clickable,
.c-list__button {
  cursor: pointer;
}

.c-list__button {
  margin: 0.5rem 0;
}
</style>
