<template>
  <section class="hero">
    <div class="hero-body">
      <h1 class="title">
        <slot />
      </h1>
      <h2 class="subtitle">
        <slot name="subtitle" />
      </h2>
    </div>
  </section>
</template>