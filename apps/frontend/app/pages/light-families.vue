<script setup lang="ts">
import { ArrowLeft, Plus, Edit, Trash2 } from "lucide-vue-next";

const router = useRouter();
const lightFamilies = [
  {
    name: "TECTON 2",
    subtitle: "Total Configurations",
    treeIds: ["92FF33A8-E128-40BF-90B2-A5154F3CB53A", "92FF33A8-E128-40BF-90B2-A5154F3CB53A"]
  },
  {
    name: "SLOIN 2",
    subtitle: "Total Configurations",
    treeIds: [
      "92FF33A8-E128-40BF-90B2-A5154F3CB53A",
      "92FF33A8-E128-40BF-90B2-A5154F3CB53A",
      "92FF33A8-E128-40BF-90B2-A5154F3CB53A"
    ]
  },
  {
    name: "ARTELEA",
    subtitle: "Total Configurations",
    treeIds: ["92FF33A8-E128-40BF-90B2-A5154F3CB53A"]
  }
];

function goToDashboard() {
  router.push("/");
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <nav class="h-16 border-b border-border flex items-center">
      <div class="max-w-7xl mx-auto px-4 flex items-center justify-between w-full">
        <div class="flex gap-2 items-center">
          <Button @click="goToDashboard" variant="ghost" size="sm" class="gap-2 cursor-pointer">
            <ArrowLeft class="w-4 h-4" />
            Back to Dashboard
          </Button>
        </div>
      </div>
    </nav>
    <main class="flex-grow p-4 flex flex-col gap-4">
      <div class="max-w-7xl mx-auto flex flex-col gap-6 w-full">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold">Light Families</h1>
            <p class="text-sm text-muted-foreground">Manage light families and their associated tree IDs</p>
          </div>
          <Button class="gap-2">
            <Plus class="w-4 h-4" />
            Add Light Family
          </Button>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <Card v-for="family in lightFamilies" :key="family.name" class="flex flex-col">
          <CardHeaderRow class="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle class="text-base font-semibold">
                {{ family.name }}
              </CardTitle>
              <CardDescription>{{ family.subtitle }}</CardDescription>
            </div>
            <div class="flex gap-2">
              <Button variant="ghost" size="sm">
                <Edit class="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Trash2 class="w-4 h-4 text-red-500" />
              </Button>
            </div>
          </CardHeaderRow>
          <CardContent>
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium">Tree IDs</span>
              <Badge variant="outline" class="text-xs">
                {{ family.treeIds.length }}
              </Badge>
            </div>
            <div class="space-y-1 max-h-24 overflow-y-auto">
              <div v-for="id in family.treeIds" :key="id" class="text-xs font-mono bg-muted px-2 py-1 rounded">
                {{ id }}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  </div>
</template>
