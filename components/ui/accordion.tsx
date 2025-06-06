'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export function Accordion(props: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

export function AccordionItem(props: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-b last:border-b-0', props.className)}
      {...props}
    />
  );
}

export function AccordionTrigger(
  props: React.ComponentProps<typeof AccordionPrimitive.Trigger>
) {
  return (
    <div className={cn('flex', props.className)}>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium ' +
          'transition-all outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring/50 ' +
          'disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          props.className
        )}
        {...props}
      >
        {props.children}
        <ChevronDownIcon className="size-4 pointer-events-none transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </div>
  );
}

export function AccordionContent(
  props: React.ComponentProps<typeof AccordionPrimitive.Content>
) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn('pt-0 pb-4', props.className)}>{props.children}</div>
    </AccordionPrimitive.Content>
  );
}
