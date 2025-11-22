<script setup lang="ts">
import { type SidebarProps, useSidebar } from '@/components/ui/sidebar'
import {
  Command,
  Home,
  Inbox,
  Search,
  Sparkles,
  StarOff,
  Link,
  ArrowUpRight,
  Trash2,
  MoreHorizontal
} from 'lucide-vue-next'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuAction,
} from '@/components/ui/sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const props = withDefaults(defineProps<SidebarProps>(), {})

const { isMobile } = useSidebar()
const data = {

  navMain: [
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Ask AI",
      url: "#",
      icon: Sparkles,
    },
    {
      title: "Home",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
      badge: "10",
    },
  ],
  favorites: [
    {
      name: "Jood",
      url: "#",
      emoji: "📊",
    },
    {
      name: "Jlox",
      url: "#",
      emoji: "🍳",
    },
    {
      name: "Introduction into Algorithm",
      url: "#",
      emoji: "💪",
    },
  ],
}
</script>

<template>
	<Sidebar v-bind="props">
		<SidebarHeader>
			<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton size="lg" as-child>
						<a href="#">
							<div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
								<Command class="size-4" />
							</div>
							<div class="grid flex-1 text-left text-sm leading-tight">
								<span class="truncate font-medium">
                  Acme Inc
                </span>
								<span class="truncate text-xs">Enterprise</span>
							</div>
						</a>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>

      <SidebarMenu>
        <SidebarMenuItem v-for="item in data.navMain" :key="item.title">
          <SidebarMenuButton as-child :is-active="item.isActive">
            <a :href="item.url">
              <component :is="item.icon" />
              <span>{{ item.title }}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
		</SidebarHeader>
		<SidebarContent>

      <SidebarGroup class="group-data-[collapsible=icon]:hidden">
        <SidebarGroupLabel>Projects</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem v-for="item in data.favorites" :key="item.name">
            <SidebarMenuButton as-child>
              <a :href="item.url" :title="item.name">
                <span>{{ item.emoji }}</span>
                <span>{{ item.name }}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <SidebarMenuAction show-on-hover>
                  <MoreHorizontal />
                  <span class="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                class="w-56 rounded-lg"
                :side="isMobile ? 'bottom' : 'right'"
                :align="isMobile ? 'end' : 'start'"
              >
                <DropdownMenuItem>
                  <StarOff class="text-muted-foreground" />
                  <span>Remove from Favorites</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link class="text-muted-foreground" />
                  <span>Copy Link</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ArrowUpRight class="text-muted-foreground" />
                  <span>Open in New Tab</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 class="text-muted-foreground" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton class="text-sidebar-foreground/70">
              <MoreHorizontal />
              <span>More</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
		</SidebarContent>
		<SidebarFooter>
		</SidebarFooter>
	</Sidebar>
</template>
