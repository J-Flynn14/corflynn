'use client';

import * as React from 'react';
import { GripVerticalIcon } from 'lucide-react';
import * as ResizablePrimitive from 'react-resizable-panels';

import { cn } from '@/lib/utils';

export function ResizablePanelGroup(
  props: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>
) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn('flex w-full h-full data-[panel-group-direction=vertical]:flex-col', props.className)}
      {...props}
    />
  );
}

export function ResizablePanel(
  props: React.ComponentProps<typeof ResizablePrimitive.Panel>
) {
  return (
    <ResizablePrimitive.Panel
      data-slot="resizable-panel"
      defaultSize={50}
      minSize={20}
      maxSize={80}
      className={props.className}
      {...props}
    />
  );
}

export function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & { withHandle?: boolean }) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        'relative flex items-center justify-center bg-border w-px ' +
        'after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 ' +
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/50 ' +
        'data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full ' +
        'data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 ' +
        'data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 ' +
        '[&[data-panel-group-direction=vertical]>div]:rotate-90',
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="flex h-4 w-3 items-center justify-center rounded-xs border bg-border z-10">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  );
}
