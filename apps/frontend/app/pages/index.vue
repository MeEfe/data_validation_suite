<script lang="ts" setup>
import {
  Database,
  Lightbulb,
  Plus,
  Settings,
  Play,
  BarChart3,
  Hourglass,
  Calendar,
  XCircle,
  CheckCircle,
  Edit,
  Trash2
} from "lucide-vue-next";

const router = useRouter();

function goToFamilies() {
  router.push("/light-families");
}

function goToConfiguration() {
  router.push("/configuration-data-source");
}

const stats = [
  {
    title: "Total Configurations",
    value: "2",
    description: "1 active",
    icon: Settings,
    iconColor: "text-blue-500"
  },
  {
    title: "Last 24h Runs",
    value: "12",
    description: "3 with errors",
    icon: Play,
    iconColor: "text-green-500"
  },
  {
    title: "Success Rate",
    value: "94.2 %",
    description: "Last 30 days",
    icon: BarChart3,
    iconColor: "text-purple-500"
  },
  {
    title: "Next Scheduled",
    value: "2h",
    description: "Daily Product Validation",
    icon: Hourglass,
    iconColor: "text-orange-500"
  }
];

const configs = [
  {
    name: "TECTON 2",
    subtitle: "Lichtbandsystems",
    tags: ["url", "16 rules", "0 filter"],
    schedule: "Daily at 09:00 (UTC)",
    status: { label: "Required", variant: "destructive" } as any,
    nextRun: "In 23 hours",
    lastResult: { label: "3 errors", date: "06.07.2025", error: true },
    active: true
  },
  {
    name: "SLOIN 2",
    subtitle: "Lichtbandsystems",
    tags: ["url", "24 rules", "2 filter"],
    schedule: "Mondays at 10:00 (UTC)",
    status: { label: "Inactive", variant: "outline" } as any,
    nextRun: "-",
    lastResult: { label: "0 errors", date: "06.07.2025", error: false },
    active: false
  }
];
</script>

<template>
  <div class="flex flex-col min-h-screen">
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
        <div class="flex gap-2">
          <Button @click="goToFamilies" variant="outline" size="sm" class="gap-2 cursor-pointer">
            <Lightbulb class="w-4 h-4" />
            Manage Light Families
          </Button>
          <Button @click="goToConfiguration" size="sm" class="gap-2 cursor-pointer">
            <Plus class="w-4 h-4" />
            New Configuration
          </Button>
        </div>
      </div>
    </nav>
    <main class="flex-grow py-4">
      <div class="max-w-7xl mx-auto px-4 flex flex-col gap-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card v-for="(stat, index) in stats" :key="index" class="flex flex-col justify-between">
            <CardHeaderRow class="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle class="text-sm font-medium">{{ stat.title }}</CardTitle>
              <component :is="stat.icon" :class="['w-6 h-6', stat.iconColor]" />
            </CardHeaderRow>
            <CardContent>
              <div class="text-2xl font-bold">{{ stat.value }}</div>
              <p class="text-xs text-muted-foreground">{{ stat.description }}</p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <div class="flex items-center gap-2">
                <Calendar class="w-5 h-5" />
                <div>
                  <CardTitle>Saved Configurations</CardTitle>
                  <CardDescription>Manage your saved validation configurations and scheduled runs</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent class="pt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Configuration</TableHead>
                    <TableHead>Schedule</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Next Run</TableHead>
                    <TableHead>Last Result</TableHead>
                    <TableHead>Active</TableHead>
                    <TableHead class="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow v-for="config in configs" :key="config.name">
                    <TableCell>
                      <div class="flex flex-col">
                        <span class="font-medium">{{ config.name }}</span>
                        <span class="text-xs text-muted-foreground">{{ config.subtitle }}</span>
                        <div class="mt-1 flex flex-wrap gap-1">
                          <Badge v-for="tag in config.tags" :key="tag" variant="outline" class="text-xs">
                            {{ tag }}
                          </Badge>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{{ config.schedule }}</TableCell>
                    <TableCell>
                      <Badge :variant="config.status.variant" class="text-xs">
                        {{ config.status.label }}
                      </Badge>
                    </TableCell>
                    <TableCell>{{ config.nextRun }}</TableCell>
                    <TableCell>
                      <div class="flex items-center gap-1">
                        <component
                          :is="config.lastResult.error ? XCircle : CheckCircle"
                          :class="['w-4 h-4', config.lastResult.error ? 'text-red-500' : 'text-green-500']"
                        />
                        <span class="text-xs">{{ config.lastResult.label }}</span>
                      </div>
                      <span class="text-xs text-muted-foreground">{{ config.lastResult.date }}</span>
                    </TableCell>
                    <TableCell>
                      <Switch v-model="config.active" />
                    </TableCell>
                    <TableCell class="text-right">
                      <div class="flex justify-end gap-2">
                        <Button variant="outline" size="sm"><Edit class="h-4 w-4" /></Button>
                        <Button variant="outline" size="sm"><Trash2 class="h-4 w-4 text-red-500" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  </div>
</template>
