<script setup lang="ts">
import { Home, Settings, Users, Edit, Menu } from "lucide-vue-next";

const collapsed = ref(false);

const toggleSidebar = () => {
  collapsed.value = !collapsed.value;
};

const rules = reactive({
  id: { required: true, notEmpty: true, type: "string" },
  quantity: { required: true, notEmpty: true, type: "number" },
  V_Color: {
    required: false,
    notEmpty: true,
    type: "string",
    allowedValues: ["V_WH", "V_BK"]
  }
});

const getDataTypeIcon = (type: string) => {
  switch (type) {
    case "string":
      return "📝";
    case "number":
      return "🔢";
    case "boolean":
      return "🔘";
    case "array":
      return "📚";
    case "object":
      return "🗂️";
    default:
      return "❓";
  }
};

const getDataTypeColor = (type: string) => {
  switch (type) {
    case "string":
      return "bg-blue-100 text-blue-800";
    case "number":
      return "bg-green-100 text-green-800";
    case "boolean":
      return "bg-yellow-100 text-yellow-800";
    case "array":
      return "bg-purple-100 text-purple-800";
    case "object":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getTypeDisplayName = (type: string) => {
  switch (type) {
    case "string":
      return "String";
    case "number":
      return "Number";
    case "boolean":
      return "Boolean";
    case "array":
      return "Array";
    case "object":
      return "Object";
    default:
      return "Unknown";
  }
};

const handleExportRules = () => {
  alert("Export rules clicked!");
};

const openEditDialog = (property: string) => {
  alert(`Open edit dialog for property: ${property}`);
};

const inputValue = ref("");
const isEnabled = ref(false);
</script>

<template>
  <div class="flex">
    <Sidebar :collapsed="collapsed">
      <SidebarHeader>
        <div class="flex items-center justify-between w-full">
          <span v-if="!collapsed" class="font-semibold text-lg">Dashboard</span>
          <Menu class="h-5 w-5 cursor-pointer" @click="toggleSidebar" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarItem to="/" :icon="Home" :collapsed="collapsed">Home</SidebarItem>
        <SidebarItem to="/users" :icon="Users" :collapsed="collapsed">Users</SidebarItem>
        <SidebarItem to="/settings" :icon="Settings" :collapsed="collapsed">Settings</SidebarItem>
      </SidebarContent>

      <SidebarFooter>
        <span v-if="!collapsed">© 2025 My App</span>
        <span v-else>©</span>
      </SidebarFooter>
    </Sidebar>

    <main
      :class="[
        collapsed ? 'ml-16' : 'ml-64',
        'transition-all duration-300 p-8 space-y-8 bg-background w-full min-h-screen text-foreground'
      ]"
    >
      <h1 class="text-2xl font-bold">UI Dashboard</h1>

      <!-- Buttons -->
      <Card>
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
          <CardDescription>Different button variants</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="flex gap-2 flex-wrap">
            <Button>Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </CardContent>
      </Card>

      <!-- Inputs -->
      <Card>
        <CardHeader>
          <CardTitle>Inputs</CardTitle>
          <CardDescription>Form input example</CardDescription>
        </CardHeader>
        <CardContent>
          <Input v-model="inputValue" placeholder="Type something..." />
          <p class="mt-2 text-sm text-muted-foreground">Value: {{ inputValue }}</p>
        </CardContent>
      </Card>

      <!-- Badges -->
      <Card>
        <CardHeader>
          <CardTitle>Badges</CardTitle>
          <CardDescription>Different badge variants</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="flex gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </CardContent>
      </Card>

      <!-- Alerts -->
      <Card>
        <CardHeader>
          <CardTitle>Alerts</CardTitle>
          <CardDescription>Notification messages</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-2">
            <Alert>This is a default alert.</Alert>
            <Alert variant="destructive">This is a destructive alert.</Alert>
          </div>
        </CardContent>
      </Card>

      <!-- Card Showcase -->
      <Card>
        <CardHeader>
          <CardTitle>Card Component</CardTitle>
          <CardDescription>Composed with subcomponents</CardDescription>
          <CardAction>
            <Button size="sm" variant="outline">Action</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p>This is the main content of the card. You can put text, forms, or anything else here.</p>
        </CardContent>
        <CardFooter>
          <p class="text-sm text-muted-foreground">Footer area</p>
        </CardFooter>
      </Card>

      <!-- Table Showcase -->
      <Card>
        <CardHeader>
          <CardTitle>Table</CardTitle>
          <CardDescription>Example of a styled table</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Required</TableHead>
                <TableHead>Not Empty</TableHead>
                <TableHead>Allowed Values</TableHead>
                <TableHead class="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow v-for="(rule, property) in rules" :key="property">
                <!-- Property -->
                <TableCell class="font-medium">
                  <code class="bg-muted px-2 py-1 rounded text-sm">{{ property }}</code>
                </TableCell>

                <!-- Type -->
                <TableCell>
                  <Badge :class="getDataTypeColor(rule.type)">
                    {{ getDataTypeIcon(rule.type) }}
                    {{ getTypeDisplayName(rule.type) }}
                  </Badge>
                </TableCell>

                <!-- Required -->
                <TableCell>
                  <Badge v-if="rule.required" variant="destructive"> Required </Badge>
                  <Badge v-else variant="outline">Optional</Badge>
                </TableCell>

                <!-- Not Empty -->
                <TableCell>
                  <Badge v-if="rule.notEmpty" variant="secondary"> Not Empty </Badge>
                  <Badge v-else variant="outline">Can be Empty</Badge>
                </TableCell>

                <!-- Allowed Values -->
                <TableCell class="max-w-xs">
                  <Badge variant="outline" class="text-xs"> Any Value </Badge>
                </TableCell>

                <!-- Actions -->
                <TableCell class="text-right">
                  <div class="flex justify-end gap-2">
                    <Button variant="outline" size="sm" @click="openEditDialog(property)">
                      <Edit class="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <!-- Switch Showcase -->
      <Card>
        <CardHeader>
          <CardTitle>Switch</CardTitle>
          <CardDescription>Toggle switch component</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <Switch v-model="isEnabled" />
            <p>Switch is: {{ isEnabled ? "ON" : "OFF" }}</p>

            <Switch v-model="isEnabled" disabled />
          </div>
        </CardContent>
      </Card>
    </main>
  </div>
</template>
