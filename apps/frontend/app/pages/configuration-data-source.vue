<script lang="ts" setup>
import { Database, Settings, BarChart3, ArrowLeft, ChevronDown } from "lucide-vue-next";

const router = useRouter();

const families = ["TECTON 2", "SLOIN 2", "ARTELEA"];
const selectedFamily = ref("");
const treeIds = ref<string[]>([]);

const toggleTreeId = (id: string, event: any) => {
  if (treeIds.value.includes(id)) {
    treeIds.value = treeIds.value.filter((t) => t !== id);
  } else {
    treeIds.value.push(id);
  }
};

const fetchData = () => {
  alert(`Fetching data for ${selectedFamily.value} with tree IDs: ${treeIds.value.join(", ")}`);
};

function goToDashboard() {
  router.push("/");
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Sidebar class="bg-neutral-50">
      <SidebarHeader class="h-16">
        <Button @click="goToDashboard" variant="ghost" size="sm" class="gap-2 cursor-pointer">
          <ArrowLeft class="w-4 h-4" />
          Back to Dashboard
        </Button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarItem to="/configuration-data-source">
          <div class="flex items-center gap-3">
            <Database class="h-5 w-5 text-gray-500" />
            <div class="flex flex-col">
              <span class="text-sm font-medium">Data Source</span>
              <span class="text-xs text-muted-foreground">No data</span>
            </div>
          </div>
        </SidebarItem>
        <SidebarItem to="/configuration-validation-rules">
          <div class="flex items-center gap-3">
            <Settings class="h-5 w-5 text-blue-500" />
            <div class="flex flex-col">
              <span class="text-sm font-medium">Validation Rules</span>
              <span class="text-xs text-blue-500">3 rules</span>
            </div>
          </div>
        </SidebarItem>
        <SidebarItem to="/results">
          <div class="flex items-center gap-3">
            <BarChart3 class="h-5 w-5 text-gray-400" />
            <div class="flex flex-col">
              <span class="text-sm font-medium">Results</span>
              <span class="text-xs text-muted-foreground">No data</span>
            </div>
          </div>
        </SidebarItem>
      </SidebarContent>

      <SidebarFooter class="cursor-default bg-neutral-50">
        <div class="text-xs font-medium text-muted-foreground mb-2">QUICK STATS</div>
        <div class="grid grid-cols-2 gap-2">
          <div class="rounded-md bg-muted p-2 text-center">
            <div class="text-sm font-bold">0</div>
            <div class="text-xs text-muted-foreground">Items</div>
          </div>
          <div class="rounded-md bg-muted p-2 text-center">
            <div class="text-sm font-bold">3</div>
            <div class="text-xs text-muted-foreground">Rules</div>
          </div>
          <div class="rounded-md bg-muted p-2 text-center">
            <div class="text-sm font-bold">0</div>
            <div class="text-xs text-muted-foreground">Errors</div>
          </div>
          <div class="rounded-md bg-muted p-2 text-center">
            <div class="text-sm font-bold">0</div>
            <div class="text-xs text-muted-foreground">Filters</div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
    <div class="flex-1 ml-64">
      <nav class="h-16 border-b border-border flex items-center">
        <div class="max-w-7xl mx-auto px-4 flex items-center justify-between w-full">
          <div class="flex gap-2 items-center cursor-default">
            <div class="bg-foreground w-8 h-8 flex items-center justify-center rounded">
              <Database class="w-4 h-4 text-white" />
            </div>
            <div class="flex flex-col">
              <h1 class="text-xl/tight font-bold">Data Validation Suite</h1>
              <p class="text-sm/tight text-muted-foreground">Load and configure data</p>
            </div>
          </div>
        </div>
      </nav>
      <main class="flex-grow py-4">
        <div class="max-w-7xl mx-auto px-4">
          <Card>
            <CardHeader>
              <div class="flex items-center gap-2">
                <Database class="w-5 h-5" />
                <div>
                  <CardTitle>Data Source Selection</CardTitle>
                  <CardDescription>Select a light family and tree ID to load data</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent class="pt-4">
              <div class="flex flex-col gap-4">
                <div class="space-y-1">
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Light Family
                  </label>
                  <Select v-model="selectedFamily">
                    <SelectTrigger class="w-full h-[38px] cursor-pointer">
                      <SelectValue placeholder="Choose a light family" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem v-for="family in families" :key="family" :value="family" class="cursor-pointer">
                        {{ family }}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div class="space-y-1">
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Tree IDs
                  </label>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      class="w-full cursor-pointer flex justify-between items-center rounded-md border border-input px-3 py-2 text-sm text-muted-foreground"
                    >
                      <span>
                        {{
                          treeIds.length > 0
                            ? treeIds.join(", ")
                            : selectedFamily
                              ? "Select tree IDs"
                              : "Select a light family first"
                        }}
                      </span>
                      <ChevronDown class="w-4 h-4 ml-2 opacity-50" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent class="w-[var(--radix-dropdown-menu-trigger-width)]">
                      <DropdownMenuCheckboxItem
                        value="TreeID-1"
                        :checked="treeIds.includes('TreeID-1')"
                        @update:checked="toggleTreeId('TreeID-1', $event)"
                        class="cursor-pointer"
                      >
                        TreeID-1
                      </DropdownMenuCheckboxItem>

                      <DropdownMenuCheckboxItem
                        value="TreeID-2"
                        :checked="treeIds.includes('TreeID-2')"
                        @update:checked="toggleTreeId('TreeID-2', $event)"
                        class="cursor-pointer"
                      >
                        TreeID-2
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <Button class="w-fit" @click="fetchData">Fetch Data</Button>
                <div class="rounded-md bg-muted p-4">
                  <h3 class="text-sm font-medium mb-2">How it works</h3>
                  <ul class="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Select a light family from the configured families</li>
                    <li>Choose tree IDs associated with that family</li>
                    <li>Click "Fetch Data" to load the data for validation</li>
                    <li>Each tree ID contains specific product data</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  </div>
</template>
