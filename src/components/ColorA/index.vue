<template>
    <a :class="type">
        <em>
            <slot></slot>
        </em>
    </a>
</template>

<script setup lang='ts'>
defineProps({
    type: {
        type: String,
        default: 'primary',
        validator(value: string) {
            return ['primary', 'secondary', 'success', 'warning', 'error'].includes(value);
        }
    }
})
</script>

<style scope lang="scss">
@use '../../styles/_light_theme';

@mixin linkColor($color: light_theme.$primary-color) {
    display: inline-block;
    color: $color;

    padding: 0 0.4rem;
    border-radius: 1rem;
    transition: all 0.3s;

    &:hover {
        color: white;
        background-color: $color;
        cursor: pointer;
        transform: translateY(-2px);
        // filter: drop-shadow(0px 3px 15px $color)
    }
}

.primary {
    @include linkColor($color: light_theme.$primary-color);
}

.secondary {
    @include linkColor($color: light_theme.$secondary-color);
}

.success {
    @include linkColor($color: light_theme.$success-color);
}

.warning {
    @include linkColor($color: light_theme.$warning-color);
}

.error {
    @include linkColor($color: light_theme.$error-color);
}
</style>