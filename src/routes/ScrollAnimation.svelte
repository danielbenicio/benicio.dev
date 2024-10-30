<script lang="ts">
    import { onMount } from 'svelte';
    import type { ScrollAnimationProps } from './ScrollAnimation.type';
    
    export let delay: ScrollAnimationProps['delay'] = 0;
    
    let element: HTMLDivElement;
    let isVisible = false;
    
    onMount(() => {
        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        isVisible = true;
                    }, delay);
                    observer.unobserve(element);
                }
            });
        }, {
            threshold: 0.1
        });
        
        observer.observe(element);
        
        return () => {
            observer.disconnect();
        };
    });
</script>

<div
    bind:this={element}
    class="scroll-animation"
    class:visible={isVisible}
>
    <slot />
</div>

<style>
    .scroll-animation {
        opacity: 0;
        transform: translateY(50px);
        transition: all 1s ease-out;
    }
    
    .visible {
        opacity: 1;
        transform: translateY(0);
    }
</style>